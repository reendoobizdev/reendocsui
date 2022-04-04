export default function People() {
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10%",
        height: "100%",
        fontFamily: "Arial"
    }

    return (
        <div style={mystyle}>
            <div class="grid  md:grid-cols-2 gap-2">
                <div>One of three columns</div>
                <div>One of three columns</div>
            </div>
            <div class="grid md:grid-cols-2 gap-2">
                <div>One of three columns</div>
                <div>One of three columns</div>
            </div>
            <div class="grid  md:grid-cols-2 gap-2">
                <div>One of three columns</div>
                <div>One of three columns</div>
            </div>
            <div class="grid  md:grid-cols-2 gap-2">
                <div>One of three columns</div>
                <div>One of three columns</div>
            </div>
        </div>
    )
}