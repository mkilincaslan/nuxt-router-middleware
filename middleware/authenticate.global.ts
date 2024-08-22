export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useCookie('user');
    
    if (!auth.value && to.path !== '/login') {
        return navigateTo('/login');
    }

    if (auth.value && to.path == '/login') {
        return navigateTo('/');
    }
});