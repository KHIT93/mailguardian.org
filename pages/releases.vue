<template>
    <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Application releases
                </h3>
                <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                    See all our current and previous releases of the application
                </p>
            </div>
        </div>
        <div class="container mx-auto">
            <div v-for="release in releases" :key="release.id" class="border-r border shadow mt-2 mb-2 border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                <div class="border-b pb-2">
                    <p class="text-sm text-gray-600 flex items-center" v-if="release.prerelease">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Pre release
                    </p>
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ release.name }}</div>
                    <VueShowdown class="text-gray-700 text-base prose-sm max-h-24 truncate" :markdown="release.body" />
                    <!-- <p class="text-gray-700 text-base">{{ release.body }}</p> -->
                </div>
                <div class="flex items-center pt-4">
                    <div class="text-sm prose-sm">
                        <p class="text-gray-600">{{ (new Date(release.published_at)).toLocaleString() }}</p>
                        <h3>Assets</h3>
                        <p v-for="asset in release.assets" :key="asset.id">
                            <a :href="asset.browser_download_url">{{ asset.name }}</a>
                        </p>
                        <p><a :href="release.tarball_url">Sourcecode (tar.gz)</a></p>
                        <p><a :href="release.zipball_url">Sourcecode (zip)</a></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async fetch() {
            let releases = [];
            await axios.get('https://api.github.com/repos/khit93/mailguardian/releases').then(response => {
                releases = response.data;
            }).catch(error => {
                console.log(error.response.data);
            });
            return releases;
        },
    },
    async asyncData({ $axios }) {
        let releases = await $axios.$get('https://api.github.com/repos/khit93/mailguardian/releases');
        return {
            releases
        };
    }
}
</script>