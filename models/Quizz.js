const quizzes = [
    {
        id: 1,
        name: "Quizz numéro 1",
        questions: [
            {
                title: "Est-ce qu'il fait beau ?",
                responses: [{
                    value: "Beau",
                    isValid: false,

                },
                {
                    value: "Gris",
                    isValid: true,
                },
                {
                    value: "Orage",
                    isValid: false,

                }
                ]
            },
            {
                title: "Bakary est-il un bon étudiant ?",
                responses: [{
                    value: "Non",
                    isValid: false,

                },
                {
                    value: "Oui",
                    isValid: true,
                }
                ]
            },
            {
                title: "Chris est-il un bon pdg ?",
                responses: [{
                    value: "Non",
                    isValid: true,

                },
                {
                    value: "Oui",
                    isValid: false,
                }
                ]
            },

        ]

    },
    {
        id: 2,
        name: "Quizz numéro 2",
        questions: [
            {
                title: "Quelle est la capital de la France",
                responses: [{
                    value: "Lyon",
                    isValid: false,

                },
                {
                    value: "Paris",
                    isValid: true,
                }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Quizz numéro 3",
        questions: [
            {
                title: "T'es nul ou pas?",
                responses: [{
                    value: "Non",
                    isValid: false,

                },
                {
                    value: "Oui",
                    isValid: true,
                }
                ]
            }
        ]
    }
]
export function find(){
    return quizzes
}
export function findOne(id){
    return quizzes.find((quizz) => quizz.id === id)
}