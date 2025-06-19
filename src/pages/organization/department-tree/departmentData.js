export const DEPARTMENTS = [
    {
        code: "CP",
        name: "Creative & Pre-Production",
        tree: {
            name: "Schergil Parvez",
            role: "Head of Department",
            children: [
                {
                    name: "Manager 1",
                    role: "Manager",
                    children: [
                        {
                            name: "Assistant Manager 1",
                            role: "Assistant Manager",
                            children: [
                                { name: "User 1", role: "User" }
                            ]
                        }
                    ]
                },
                {
                    name: "Manager 2",
                    role: "Manager",
                    children: [
                        {
                            name: "Assistant Manager 1",
                            role: "Assistant Manager",
                            children: [
                                { name: "User 1", role: "User" }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        code: "P",
        name: "Production",
        tree: { name: "Production HOD", role: "Head of Department" }
    },
    // ... Add more departments as needed
];