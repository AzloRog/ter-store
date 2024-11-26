interface NavLinks {
    name: string,
    link: string,
    hasNotification?: boolean
}

const navLinks: NavLinks[] = [
    {
        name: "Главная",
        link: "/"
        
    },
    {
        name: "Корзина",
        link: "/basket",
        hasNotification: true,
    }
]

export default navLinks;