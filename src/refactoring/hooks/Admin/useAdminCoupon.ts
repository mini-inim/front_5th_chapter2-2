import { useState } from "react";
import { Coupon } from "../../../types";

export const useAdminCoupon = () => {
    const [newCoupon, setNewCoupon] = useState<Coupon>({
        name: '',
        code: '',
        discountType: 'percentage',
        discountValue: 0
    });


    const addCoupon = ( onCouponAdd: (newCoupon: Coupon) => void ) => {
        onCouponAdd(newCoupon);
        setNewCoupon({
          name: '',
          code: '',
          discountType: 'percentage',
          discountValue: 0
        });
    };

    return{   
        newCoupon, 
        setNewCoupon,
        addCoupon
    }
}