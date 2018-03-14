import apisauce from 'apisauce'

const create = (baseURL = 'https://api.123formbuilder.com/v2/') => {
    const api = apisauce.create({
        baseURL,
        headers: {
        },
        timeout: 5000
    });

    /**
     * Groups
     */
    const getGroups = (token, page, perPage) => {
        const data = {
            JWT: token,
        };

        return api.get('groups', data);
    };

    const getGroup = (token, groupId) => {
        const data = {
            JWT: token,
        };

        return api.get(`groups/${groupId}`, data);
    };


    /**
     * Forms
     */
    const getForms = (token, page, perPage) => {
        const data = {
            JWT: token,
        };

        return api.get('forms', data);
    };

    const getForm = (token, formId) => {
        const data = {
            JWT: token,
        };

        return api.get(`forms/${formId}`, data);
    };

    const deleteForm = (token, formId) => {
        const data = {
            JWT: token,
        };

        return api.delete(`forms/${formId}`, data);
    };

    const renameForm = (token, formId, formName) => {
        const data = {
            JWT: token,
            name: formName
        };

        return api.put(`forms/${formId}`, data);
    };

    /**
     * Fields
     */
    const getFields = (token, formId) => {
        const data = {
            JWT: token,
        };

        return api.get(`forms/${formId}/fields`, data);
    };

    /**
     * Submissions
     */

    const getSubmissions = (token, formId, page = 1, perPage = 100) => {
        const data = {
            page: page,
            per_page: perPage,
            JWT: token
        };

        return api.get(`forms/${formId}/submissions`, data);
    };

    /**
     * @param token
     * @param formId
     * @param submissionId
     * @returns {Promise<ApiResponse<any>>}
     */
    const deleteSubmission = (token, formId, submissionId) => {
        const data = {
            form_id: formId,
            submission_id: submissionId,
            JWT: token
        };

        return api.delete(`forms/${formId}/submissions/${submissionId}`, data);
    };

    /**
     * User
     */
    const getTokenWithUsernameAndPassword = (username, password) => {
        const data = {
            username: username,
            password: password
        };

        return api.post(`token`, data);
    };

    const refreshToken = token => {
        const data = {
            JWT: token,
        };

        return api.post('token/refresh', data);
    };

    const getCompanies = (token) => {
        const data = {
            JWT: token
        };

        return api.get('companies', data);
    };

    const getUser = (token) => {
        const data = {
            page: 1,
            perPage: 1,
            JWT: token
        };

        return api.get('users', data);
    };

    const getUsers = (token) => {
        const data = {
            JWT: token
        };

        return api.get('users', data);
    };

    return {
        getGroups,

        getForms,
        getForm,
        deleteForm,
        renameForm,

        getFields,

        getSubmissions,
        deleteSubmission,

        getCompanies,
        getUser,
        getUsers,
        refreshToken,
        getTokenWithUsernameAndPassword
    }
};

export default {
    create
}
