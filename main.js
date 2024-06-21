(() => {
    const scriptSrc = new URL(document.currentScript.src);
    const scriptSrcPathName = scriptSrc.pathname;
    const scriptTags = Array.from(document.getElementsByTagName("script")) ?? [];
    const basePath = scriptTags
        .map(tag => {
            console.log(tag.src);
            return tag.src;
        })
        .filter(src => src.includes(scriptSrcPathName))
        .reduce((loaderSrc, currentSrc) => {
            if (currentSrc) {
                try {
                    return new URL(currentSrc).origin;
                } catch (_) {
                    return loaderSrc;
                }
            }
        }, window.location.origin);

    console.log("MAIN", basePath);
})();
