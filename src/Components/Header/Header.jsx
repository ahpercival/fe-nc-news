import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>AHP News</h1>
            <ul>
                <li>Home</li>
                <li>Topics</li>
                <li>Articles</li>
                <li>Users</li>
                <li>
                    <form>
                        <input placeholder="Username" type="text" />
                        <input type="submit" value="Login" />
                    </form>
                </li>
            </ul>

        </div>
    )
}

export default Header