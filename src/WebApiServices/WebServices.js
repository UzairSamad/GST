const baseUrl = 'https://minisolution-backend.herokuapp.com'
// clientAuthenticationbeforelogin
export const authenticateClientBeforeLogin = `${baseUrl}/authenticate`;

// AUTH API
export const user_register = `${baseUrl}/api/register`;
export const user_login = `${baseUrl}/api/login`;



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
