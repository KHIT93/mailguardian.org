<template>
    <div class="w-full max-w-screen-xl mx-auto px-6">
        <div class="lg:flex -mx-6">
            <div class="fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16">
                <div class="h-full overflow-y-auto lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white">
                    <nav class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                        <template v-for="topic in topics" :key="topic._path">
                            <div class="mb-8" v-if="topic.children">
                                <h5 class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs text-gray-500">{{ topic.title }}</h5>
                                <ul>
                                    <li class="mb-3 lg:mb-1" v-for="article in topic.children" :key="article._path">
                                        <NuxtLink :to="article._path" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block text-gray-600 hover:text-gray-900 font-medium rounded-md" exact-active-class="text-blue-800 bg-blue-200">
                                            <span class="rounded absolute inset-0 bg-blue-200 opacity-0"></span>
                                            <span class="relative">{{ article.title }}</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </nav>
                </div>
            </div>
            <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
                <div class="flex">
                    <div class="pb-16 w-full pt-12">
                        <ContentDoc class="prose-sm prose-gray dark:prose-invert max-w-none">
                            <!-- Slot if document is not found -->
                            <template #not-found>
                                <h1 class="text-2xl">
                                    Page not found
                                </h1>
                            </template>
                        </ContentDoc>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "docs",
});
const { children: topics } = (await fetchContentNavigation())[0]
</script>