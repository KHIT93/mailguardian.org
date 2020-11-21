<template>
    <div class="w-full max-w-screen-xl mx-auto px-6">
        <div class="lg:flex -mx-6">
            <div class="fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16">
                <div class="h-full overflow-y-auto lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white">
                    <nav class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                        <div class="mb-8" v-for="category in articles" :key="category.name">
                            <h5 class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs text-gray-500">{{ category.name }}</h5>
                            <ul>
                                <li class="mb-3 lg:mb-1" v-for="article in category.nodes" :key="article.title">
                                    <nuxt-link :to="'/docs/' + article.slug" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block text-gray-600 hover:text-gray-900 font-medium">
                                        <span class="rounded absolute inset-0 bg-blue-200 opacity-0"></span>
                                        <span class="relative">{{ article.title }}</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
            <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
                <div class="flex">
                    <div class="pb-16 w-full pt-12">
                        <nuxt-content class="prose-sm" :document="article"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        let articles = await $content('docs').sortBy('category_order').sortBy('article_order').fetch();
        let categories = await $content('docs').sortBy('category_order').only(['category', 'category_order']).fetch();
        let data = {};
        await categories.forEach(element => {
            if (!data[element.category_order]) {
                data[element.category_order] = {
                    name: element.category,
                    nodes: articles.filter(article => article.category == element.category)
                }
            }
        });
        return {
            articles: data,
            article: await $content('docs', params.slug ).fetch()
        }
    }
}
</script>