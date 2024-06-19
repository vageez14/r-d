(() => {
    const scriptSrc = new URL(document.currentScript.src);
    const scriptSrcPathName = scriptSrc.pathname;
    const scriptTags = Array.from(document.getElementsByTagName("script")) ?? [];
    const basePath = scriptTags
        .map(tag => console.log(tag) || tag.src)
        .map(tag => tag.src)
        .filter(src => src.includes(scriptSrcPathName))
        .reduce((loaderSrc, currentSrc) => currentSrc ? new URL(currentSrc).origin : undefined, undefined);

    console.log("MAIN", basePath);
})();
