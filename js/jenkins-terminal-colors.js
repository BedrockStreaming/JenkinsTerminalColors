$(document).ready(function() {
    function transformText(text) {
        text = text.replace(/\[0m/g, "</span>");
        text = text.replace(/\[([0-9;]+)m/g, function (match, code, offset, string) {
            return "<span class='jtc-" + code.replace(/;/g, ' jtc-') + "'>";
        });

        return text;
    }

    setInterval(function() {
        $('pre').get(0).innerHTML = transformText($('pre').get(0).innerHTML);
    }, 200);
});
