export const usersMock = Array.from({ length: 10 }, (v, k) => ({
    id: k + 1,
    name: `User ${k + 1}`,
    email: `user${k + 1}@example.com`,
}));