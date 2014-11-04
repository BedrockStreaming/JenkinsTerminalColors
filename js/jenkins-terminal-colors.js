$(document).ready(function() {
    function transformText(text) {
        text = text.replace(/\[0m/g, "</span>");
        text = text.replace(/\[([0-9;]+)m/g, function (match, code, offset, string) {
            return "<span class='jtc-" + code.replace(/;/g, ' jtc-') + "'>";
        });

        return text;
    }

    function reformatExecute() {
        var pre_element = $('pre').get(0);

        var original_inner_html = pre_element.innerHTML;
        var reformated_inner_html = transformText(original_inner_html);

        // Only update the content if it actually changed.
        // The transformations in `transformText` will increase the text length if any happened.
        var text_changed = (original_inner_html.length != reformated_inner_html.length);
        if (text_changed) {
            pre_element.innerHTML = reformated_inner_html;
        }
    }
    setInterval(reformatExecute, 200);
});
