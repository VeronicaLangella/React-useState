import { useState } from "react";

function ToggleBtn() {
    const [classBtn, setClass] = useState("btn btn-danger");

    function changeBtn() {
        setClass(prev =>
            prev === "btn btn-danger" ? "btn btn-success" : "btn btn-danger"

        );
    }


    return (
        <>
            <h4 style={{ marginTop: "20px" }}>2. Toggle Button </h4>
            <button
                type="button"
                className={classBtn}
                onClick={changeBtn} style={{ marginTop: "20px" }}
            >
                Cliccami
            </button>
        </>

    );
}

export default ToggleBtn