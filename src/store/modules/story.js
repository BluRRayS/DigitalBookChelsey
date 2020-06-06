const state = {
    pages: [{
            id: 1,
            image: "",
            text: "Lenny het lammetje denkt dat hij een koe is. hij rent vrolijk tussen de koeien rond.Maar de koeien lachen hem uit. Jij bent toch helemaal geen koe je hebt geen vlekken zei Koen koe."
        },
        {
            id: 2,
            image: "",
            text: "maar wat ben ik dan zei Lenny het lammetje. Misschien ben je wel een kip zei Koen koe. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje."
        },
        {
            id: 3,
            image: "",
            text: "Lenny het lammetje kwam aan bij het kippenhok. Ben ik een kip vroeg Lenny het lammetje. Nee kakelde de kippen in koor. Je kan helemaal geen kip zijn want je hebt geen veren zei Kira kip."
        },
        {
            id: 4,
            image: "",
            text: "maar wat ben ik dan zei Lenny het lammetje. Misschien ben je wel een poes zei Kira kip. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje."
        },
        {
            id: 5,
            image: "",
            text: "Lenny het lammetje kwam aan bij de poezenmand. Ben ik een poes vroeg Lenny het  lammetje. Nee miauwde de poezen in koor. Je kan helemaal geen poes zijn want je hebt geen lange staart zei pip poes."
        },
        {
            id: 6,
            image: "",
            text: "Maar wat ben ik dan zei Lenny het lammetje. Misschien ben je wel een varken zei pip poes. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje"
        },
        {
            id: 7,
            image: "",
            text: "Lenny het lammetje kwam aan bij de varkensstal. Ben ik een varken vroeg Lenny het lammetje. Nee knorde de varkens in koor. Je kan helemaal geen varken zijn want je heb geen roze huid zei Victor varken."
        },
        {
            id: 8,
            image: "",
            text: "Maar wat ben ik dan zei Lenny het lammetje. Misschien ben je wel een paard zei Victor varken. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje."
        },
        {
            id: 9,
            image: "",
            text: "Lenny het lammetje kwam aan bij de paarden stal. Ben ik een paard vroeg Lenny het lammetje. Nee hinnikte de paarden in koor. Je kan helemaal geen paard zijn want je hebt geen lange benen zei Pien paard."
        },
        {
            id: 10,
            image: "",
            text: "Maar wat ben ik dan zei Lenny het lammetje. Misschien ben je wel een geit zei Pien paard. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje."
        },
        {
            id: 11,
            image: "",
            text: "Lenny het lammetje kwam aan bij de geiten weiden. Ben ik een geit vroeg Lenny het lammetje. Nee mekkerde de geiten in koor. Je kan helemaal geen geit zijn want je hebt geen sik zei Guus geit."
        },
        {
            id: 12,
            image: "",
            text: "Maar wat ben ik dan zei Lenny het lammetje. Ik weet wat je bent je bent een schaap zeiGuus geit. Ga maar eens bij hun langs. Dat is een goed idee zei Lenny het lammetje."
        },
        {
            id: 13,
            image: "",
            text: "Lenny het lammetje kwam aan bij de schapen weiden. Ben ik een schaap vroeg Lenny het lammetje. Ja blèren de schapen in koor. Jij bent een schaap want je hebt een wollen witten vacht, korte pootjes en een klein staartje zei Suzy schaap."
        },
        {
            id: 14,
            image: "",
            text: "Lenny het lammetje weet nu eindelijk wat hij is. hij is een schaap. daar is hij heel blij mee. Hij rent nu vrolijk door de schapen weiden met al zijn schapen vriendjes."
        },
    ]
};

const getters = {
    pageCount: state => {
        return state.pages.length
    },
    getPageById: (state) => (id) => {
        return state.pages.find(page => page.id === id)
    }
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};