/*
Permite saber al sistema la forma que traen los datos desde el json

*/


export default interface ProductInterface{
    id:number
    title: string
    amount: string 
    price: number
    description: string
    favorite: boolean
    discount: boolean
    discountPer: number
    discountUni: string
}