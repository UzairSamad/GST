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
    delete_category
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
    const [categories, setCategories] = useState([])
    const [services, setServices] = useState([])



    const getProduct = async () => {
        try {
            let res = await getResource(get_products);
            setIsloading(false);
            setProducts(res.data.data)
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }
    const getCategories = async () => {
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
        try {
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
            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    };


    const updateProduct = async (data, id) => {
        try {
            let res = await updateResource(`${update_product}/${id}`, data)

            successHelper.handleSuccess('Product Updated Successfully', true);

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const updateCategory = async (data, id) => {
        try {
            let res = await updateResource(`${update_category}/${id}`, data)

            successHelper.handleSuccess('Category Updated Successfully', true);
            getCategories()

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const updateService = async (data, id) => {
        try {
            let res = await updateResource(`${update_service}/${id}`, data)

            successHelper.handleSuccess('Service Updated Successfully', true);

            setIsloading(false);
        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const deleteCategory = async (id) => {
        try {
            setIsloading(false);
            getCategories()

        } catch (error) {
            ErrorHelper.handleErrors(error, true);
            setIsloading(false);
        }
    }

    const deleteProduct = async (data, id) => {
        try {
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
                    isLoading


                }}
            >
                {props.children}
            </AppContext.Provider>
        </>
    );
};

export default memo(AppProvider);
