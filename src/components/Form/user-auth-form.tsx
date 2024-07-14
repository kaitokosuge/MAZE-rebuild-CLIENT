import React from "react";

export default function UserAuthForm() {
    return (
        <div>
            <form>
                <label htmlFor="email">email</label>
                <input id="email" type="email" />
                <button>login</button>
            </form>
        </div>
    );
}
