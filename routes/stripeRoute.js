const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51HPEVkHcnQMBASRuKIPH5W20L3WyN2yuCnQhmSoXPI1xtQNDXSaeoU3UCT6NTlctaifmEXQ1wuzWpgIKNFieXXPL00XAvspOI2');

async function hello(){
    const coupon = await stripe.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 3,
      });
    console.log(coupon);
    const coupon2 = await stripe.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 4,
      });
      console.log(coupon2);

      const coupon3 = await stripe.coupons.retrieve(
        'eWHKR8OB'
      );
    console.log(coupon3);
    const coupons4 = await stripe.coupons.list({
        limit: 4
      });
    console.log(coupons4);
}

router.route('/').get((req,res)=>{
    const hell = hello();
    res.status(200).json(hell);
});

module.exports = router;