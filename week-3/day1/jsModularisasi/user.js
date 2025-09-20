export const user = [  
    {id: 1, nama: "dryanz", umur: 20},
    {id: 2, nama: "budi", umur: 21},
    {id: 3, nama: "susi", umur: 19}
];

export function getAllUser(){
    return user;
}

export function getUserById(id){
    return user.find(u => u.id === id);
}