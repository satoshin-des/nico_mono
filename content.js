(() => {
    // 既に追加済みなら終了
    if (document.getElementById("monochrome-toggle-button")) {
        return;
    }

    let enabled = true;

    // bodyにclassを追加
    document.documentElement.classList.add(
        "monochrome-media-extension-filter"
    );

    // ボタン生成
    const button = document.createElement("button");

    button.id = "monochrome-toggle-button";
    button.textContent = "ナフサ不足\nモード";

    button.classList.add("active");
    
    const updateState = () => {
        if (enabled) {
            document.documentElement.classList.add(
                "monochrome-media-extension-filter"
            );

            button.classList.add("active");
            button.textContent = "ナフサ不足\nモード";
        } else {
            document.documentElement.classList.remove(
                "monochrome-media-extension-filter"
            );

            button.classList.remove("active");
            button.textContent = "通常\nモード";
        }
    };

    // クリック時切替
    button.addEventListener("click", () => {
        enabled = !enabled;
        updateState();
    });

    // ページへ追加
    document.body.appendChild(button);

    updateState();
})();