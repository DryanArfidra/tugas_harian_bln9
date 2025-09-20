export const nilai = [80, 90, 70, 60, 85];

export function rataRata() {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    return total / nilai.length;
}

export function nilaiTertinggi() {
    return Math.max(...nilai);
}

export function nilaiTerendah() {
    return Math.min(...nilai);
}