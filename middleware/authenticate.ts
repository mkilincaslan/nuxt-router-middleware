export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useCookie('user');
    
    if (!auth.value) {
        return navigateTo('/login');
    }
});