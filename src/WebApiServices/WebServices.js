const baseUrl = 'https://minisolution-backend.herokuapp.com'
// clientAuthenticationbeforelogin
export const authenticateClientBeforeLogin = `${baseUrl}/authenticate`;

// AUTH API
export const user_register = `${baseUrl}/api/register`;
export const user_login = `${baseUrl}/api/login`;

// forget password

export const forget_password = `${baseUrl}/api/change-password`;

// product apis
export const get_products = `${baseUrl}/api/getAllProduct`
export const create_product = `${baseUrl}/api/createProduct`
export const update_product = `${baseUrl}/api/updateProduct`
export const delete_product = `${baseUrl}/api/deleteProduct`


// category apis
export const get_categories = `${baseUrl}/api/getAllCategory`
export const create_category = `${baseUrl}/api/createCategory`
export const update_category = `${baseUrl}/api/updateCategory`
export const delete_category = `${baseUrl}/api/deleteCategory`


// services apis
export const get_services = `${baseUrl}/api/getAllService`
export const create_service = `${baseUrl}/api/createService`
export const update_service = `${baseUrl}/api/updateService`
// export const delete_service =  `${baseUrl}/api/deleteProduct`

// mobile user

export const mobile_app_users = `${baseUrl}/api/allmobileUsers`


// appointments

export const get_appointments = `${baseUrl}/api/getAllAppointment`
export const update_appointmentStatus = `${baseUrl}/api/updateAppointmentStatus`

// promotions apis
export const create_promotion = `${baseUrl}/api/createPromotion`
export const get_promotions = `${baseUrl}/api/getAllPromotions`
export const delete_promotion = `${baseUrl}/api/deletePromotions`
export const update_promotion = `${baseUrl}/api/updatePromotions`

// oreders apis
export const get_all_orders = `${baseUrl}/api/allOrder`
export const update_orderStatus = `${baseUrl}/api/updateOrderStatus`


// settings
export const get_settings = `${baseUrl}/api/getSettings`
export const update_privacyPolicy = `${baseUrl}/api/updateOrderStatus`
export const update_Aboutus = `${baseUrl}/api/updateAbout`
export const update_deliveryCharges = `${baseUrl}/api/updateSettings`


//customer care 

export const customer_care = `${baseUrl}/api/getContactUs`





