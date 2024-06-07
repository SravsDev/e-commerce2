
import k1 from "./k1.png"
import k2 from "./k2.png"
import k3 from "./k3.png"
import k4 from "./k4.png"
import k5 from "./k5.png"
import k6 from "./k6.png"
import k7 from "./k7.png"
import k8 from "./k8.png"
import k9 from "./k9.png"
import k10 from "./k10.png"
import k11 from "./k11.png"
import k12 from "./k12.png"
import p1_img from "./p1_img.png"
import p2_img from "./p2_img.png"
import p3_img from "./p3_img.png"
import p4_img from "./p4_img.png"
import w5 from "./w5.png"
import w6 from "./w6.png"
import w7 from "./w7.png"
import w8 from "./w8.png"
import w9 from "./w9.png"
import w10 from "./w10.png"
import w11 from "./w11.png"
import w12 from "./w12.png"
import c5 from "./c5img.png"
import c6 from "./c6img.png"
import m3 from "./m3.png"
import m4 from "./m4.png"
// import c5 from "./c5img.png"
// import c6 from "./c6img.png"
// import m7 from "./m7.png"
// import m8 from "./m8.png"
// import m9 from "./m9.png"
// import m10 from "./m10.png"
// import m11 from "./m11.png"
// import m12 from "./m12.png"






let all_products=[
    {
        id:13,
        name:"Kids Daily Fashion World",
        category:"kids",
        image:k1,
        new_price:50.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:14,
        name:"Kids Casual Fashion World",
        category:"kids",
        image:k2,
        new_price:100.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:15,
        name:"Kids  RegularFashion World",
        category:"kids",
        image:k3,
        new_price:180.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:16,
        name:"Kids  Stylish Fashion World",
        category:"kids",
        image:k4,
        new_price:60.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:17,
        name:"Kids Fashion World",
        category:"kids",
        image:k5,
        new_price:40.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:18,
        name:"Kids Daily Fashion World",
        category:"kids",
        image:k6,
        new_price:550.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:19,
        name:"Kids Regular Fashion World",
        category:"kids",
        image:k7,
        new_price:250.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:20,
        name:"Kids  Suits Fashion World",
        category:"kids",
        image:k8,
        new_price:150.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:21,
        name:"Kids Regular Fashion World",
        category:"kids",
        image:k9,
        new_price:350.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:22,
        name:"Kids Fashion World",
        category:"kids",
        image:k10,
        new_price:576.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:23,
        name:"Kids Fashion World",
        category:"kids",
        image:k11,
        new_price:570.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:24,
        name:"Kids Suit Fashion World",
        category:"kids",
        image:k12,
        new_price:300.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:1,
        name:"Womens  Regular Fashion World",
        category:"womens",
        image:p1_img,
        new_price:380.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:2,
        name:"Womens Daily Fashion World",
        category:"womens",
        image:p2_img,
        new_price:50.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:3,
        name:"Womens  Saree Fashion World",
        category:"womens",
        image:p3_img,
        new_price:500.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:4,
        name:"Womens  Office Fashion World",
        category:"womens",
        image:p4_img,
        new_price:57.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:5,
        name:"Womens  Kurta Fashion World",
        category:"womens",
        image:w5,
        new_price:560.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:6,
        name:"Womens  Lehanga Fashion World",
        category:"womens",
        image:w6,
        new_price:540.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:7,
        name:"Womens Daily Fashion World",
        category:"womens",
        image:w7,
        new_price:200.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:8,
        name:"Womens Office Fashion World",
        category:"womens",
        image:w8,
        new_price:375.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:9,
        name:"Womens Dress Fashion World",
        category:"womens",
        image:w9,
        new_price:520.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:10,
        name:"Womens Saree Fashion World",
        category:"womens",
        image:w10,
        new_price:755.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:11,
        name:"Womens Fashion World",
        category:"womens",
        image:w11,
        new_price:510.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:12,
        name:"Womens Fashion World",
        category:"womens",
        image:w12,
        new_price:590.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:25,
        name:"Mens stylish Fashion World",
        category:"mens",
        image:c5,
        new_price:520.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:26,
        name:"Mens  Suit Fashion World",
        category:"mens",
        image:c6,
        new_price:530.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:27,
        name:"Mens  Office Fashion World",
        category:"Mens",
        image:c5,
        new_price:510.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:28,
        name:"Mens casual Fashion World",
        category:"Mens",
        image:c6,
        new_price:570.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:29,
        name:"Mens Daily Fashion World",
        category:"mens",
        image:c5,
        new_price:550.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:30,
        name:"Mens  Suit Fashion World",
        category:"mens",
        image:c6,
        new_price:750.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:31,
        name:"Mens Fashion World",
        category:"mens",
        image:c5,
        new_price:800.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:32,
        name:"Mens Regular Fashion World",
        category:"mens",
        image:c6,
        new_price:650.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:33,
        name:"Mens Regualr Fashion World",
        category:"mens",
        image:c5,
        new_price:750.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:34,
        name:" Office Fashion World of mens",
        category:"mens",
        image:c6,
        new_price:290.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:35,
        name:"Casual Fashion World of Mens",
        category:"mens",
        image:c5,
        new_price:100.00,
        old_price:80.50,
        quantity:1,
    },
    {
        id:36,
        name:" Fashion World of Men",
        category:"mens",
        image:c6,
        new_price:1000.00,
        old_price:80.50,
        quantity:1,
    },



]
export default all_products;