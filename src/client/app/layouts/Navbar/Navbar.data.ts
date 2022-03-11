interface NavbarData {
    id: number;
    path: string;
    text: string;
}

export const navbarData: NavbarData[] = [
    {id: 0, path: '/', text: 'Home'},
    {id: 1, path: '/posts', text: 'Posts'},
    {id: 2, path: '/contacts', text: 'Contacts'},
]
