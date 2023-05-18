<script>
</script>

<template>
    <body>
        <header>
            <div class="logo">
                <h1 style="color: aliceblue;">Food</h1>
                <h1 style="color: #f56358;">Shop</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/">
                            <a href="">Home</a>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <a href="">Menu</a>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <a href="">Galery</a>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <a href="">About</a>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/cart">
                            <a href="">Keranjang</a>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
    </body>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

header {
    background-color: rgb(97, 235, 143);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 100px;
    width: 100%;
    box-sizing: border-box;
}

header .logo {
    display: flex;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    float: left;
    font-weight: bold;
    margin-top: -35px;
}

header nav {
    float: right;
}

header nav ul {
    margin: 0;
    padding: 0;
    display: flex;
}

header nav ul li {
    list-style: none;
}

header nav ul li a {
    color: black;
    line-height: 60px;
    padding: 0 20px;
    font-size: 17px;
    text-decoration: none;
    display: block;
}

header nav ul li a:hover {
    color: #fff;
    background-color: #f56358;
}


@media (max-width: 650px) {
    header {
        padding: 0 20px;
    }
}
</style>