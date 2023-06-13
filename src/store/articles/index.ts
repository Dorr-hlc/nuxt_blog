import { defineStore } from 'pinia'
export const articlesInfo = defineStore("articles", {
    state: () => ({
        recentArticle: {},
        allArticle: {}
    }),
    getters: {
        filteredItems: (state) => (title: any) => {
            return Object.values(state.allArticle).filter((item: any) => item.title === title)[0]
        }
    },
    actions: {
        async getRecentArticle() {
            this.recentArticle = await queryContent("/articles")
                .sort({ date: 1 })
                .limit(3)
                .find();
        },
        async getAllArticle() {
            this.allArticle = await queryContent("/articles").find()
        },
    }

})