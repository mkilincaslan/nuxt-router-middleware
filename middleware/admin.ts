type User = {
    username: string;
    role: string;
};

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie<User>('user');

    if (user.value.role !== 'admin') {
        return navigateTo('/');
    }
});