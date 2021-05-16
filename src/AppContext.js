import React, { createContext, useState, memo, useEffect } from 'react';
import {
    create_product,
    update_product,
    delete_product,
    get_products,
    get_categories,
    get_services,
    create_category,
    create_service,
    update_category,
    update_service,
    delete_category,
    mobile_app_users,
    get_appointments,
    update_appointmentStatus,
    update_promotion,
    delete_promotion,
    get_promotions,
    create_promotion,
    get_all_orders,
    customer_care,
    update_orderStatus
} from './WebApiServices/WebServices';
import { createResource, deleteResource, getResource, updateResource } from './WebApiServices/SimpleApiCalls';
import ErrorHelper from './views/components/Alert/ErrorHelper';
import successHelper from './views/components/Alert/successHelper';

export const AppContext = createContext();
const AppProvider = props => {
    const [user, setUser] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const [image, setImage] = useState('');
    const [products, setProducts] = useState([])
    const [promotions, setPromotions] = useState([])
    const [categories, setCategories] = useState([])
    const [services, setServices] = useState([])
    const [orders, setOrders] = useState([])
    const [appUsers, setAppUsers] = useState([])
    const [appointment, setAppointment] = useState([])
    const [customercare, setCustomerCare] = useState([])

    const getProduct = async () => {
        setIsloading(true)

        try {
            let res = await getResource(get_products);
            setIsloading(false);
            setProducts(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const getCustomerCare = async () => {
        setIsloading(true)

        try {
            let res = await getResource(customer_care);
            setIsloading(false);
            setCustomerCare(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const getPromotions = async () => {
        setIsloading(true)
        try {
            let res = await getResource(get_promotions);
            setIsloading(false);
            setPromotions(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const getAllAppointment = async () => {
        setIsloading(true)
        try {
            let res = await getResource(get_appointments);
            setIsloading(false);
            setAppointment(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const getMobileUsers = async () => {
        setIsloading(true)

        try {
            let res = await getResource(mobile_app_users);
            setIsloading(false);
            setAppUsers(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const getCategories = async () => {
        setIsloading(true)

        try {
            let res = await getResource(get_categories);
            console.log(res, 'resssssssssss')
            setCategories(res.data.data)
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const getServices = async () => {
        setIsloading(true)

        try {
            let res = await getResource(get_services);
            console.log(res, 'resssssssssss')
            setServices(res.data.data)
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const getAllOrders = async () => {
        setIsloading(true)

        try {
            let res = await getResource(get_all_orders);
            console.log(res, 'resssssssssss')
            setOrders(res.data.data)
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const createProduct = async data => {

        setIsloading(true);
        try {
            let res = await createResource(`${create_product}`, data)
            successHelper.handleSuccess('Product Created Successfully', true);
            window.location = '/products'

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    };
    const createPromotion = async data => {
        setIsloading(true);
        try {
            let res = await createResource(`${create_promotion}`, data)
            successHelper.handleSuccess('Promotion Created Successfully', true);
            window.location = '/promo-deals'
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    };
    const createCategory = async data => {
        setIsloading(true);
        try {
            let res = await createResource(create_category, data)
            successHelper.handleSuccess('Category Created Successfully', true);
            window.location = '/cateogries'

            getCategories()
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    };
    const createService = async data => {
        setIsloading(true);
        try {
            let res = await createResource(`${create_service}`, data)

            successHelper.handleSuccess('Service Created Successfully', true);
            window.location = '/services'
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    };


    const updateProduct = async (data, id) => {
        setIsloading(true)
        try {
            let res = await updateResource(`${update_product}/${id}`, data)
            successHelper.handleSuccess('Product Updated Successfully', true);
            window.location = '/products'

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const updateOrderStatus = async (data, id) => {
        setIsloading(true)
        try {
            let res = await updateResource(`${update_product}/${id}`, {})
            successHelper.handleSuccess('Order Updated Succesfully', true);
            window.location = '/orders'
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const updateAppointment = async (data, id) => {
        setIsloading(true)

        try {
            let res = await updateResource(`${update_appointmentStatus}/${id}`, data)
            successHelper.handleSuccess('Status Updated Successfully', true);
            getAllAppointment()
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const updateCategory = async (data, id) => {
        setIsloading(true)

        try {
            let res = await updateResource(`${update_category}/${id}`, data)

            successHelper.handleSuccess('Category Updated Successfully', true);
            getCategories()
            window.location = '/cateogries'

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const updateService = async (data, id) => {
        setIsloading(true)

        try {
            let res = await updateResource(`${update_service}/${id}`, data)

            successHelper.handleSuccess('Service Updated Successfully', true);
            window.location = '/services'

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const updatePromotion = async (data, id) => {
        setIsloading(true)
        try {
            let res = await updateResource(`${update_promotion}/${id}`, data)
            successHelper.handleSuccess('Promotion Updated Successfully', true);
            window.location = '/promo-deals'
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const updateProductStatus = async (data, id) => {
        setIsloading(true)
        try {
            let res = await updateResource(`${update_orderStatus}/${id}`, data)
            successHelper.handleSuccess('Status  Updated Successfully', true);
            window.location = '/orders'
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const deleteCategory = async (id) => {
        setIsloading(true)

        try {
            let res = await deleteResource(`${delete_category}/${id}`)
            successHelper.handleSuccess('Category Deleted Succesfully')
            setIsloading(false);
            getCategories()

        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const deleteProduct = async (id) => {
        setIsloading(true)

        try {
            let res = await deleteResource(`${delete_product}/${id}`)
            successHelper.handleSuccess('Product Deleted Succesfully')
            getProduct()
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const deletePromotion = async (id) => {
        setIsloading(true)

        try {
            let res = await deleteResource(`${delete_promotion}/${id}`)
            successHelper.handleSuccess('Promotion Deleted Succesfully')
            getPromotions()
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }





    return (
        <>
            <AppContext.Provider
                value={{
                    getProduct,
                    createProduct,
                    updateProduct,
                    deleteProduct,
                    products,
                    categories,
                    services,
                    getServices,
                    getCategories,
                    createCategory,
                    updateCategory,
                    deleteCategory,
                    createService,
                    updateService,
                    isLoading,
                    getMobileUsers,
                    appUsers,
                    getAllAppointment,
                    appointment,
                    updateAppointment,
                    getPromotions,
                    createPromotion,
                    updatePromotion,
                    deletePromotion,
                    promotions,
                    updateOrderStatus,
                    getAllOrders,
                    orders,
                    getCustomerCare,
                    customercare,
                    updateProductStatus
                }}
            >
                {props.children}
            </AppContext.Provider>
        </>
    );
};

export default memo(AppProvider);
