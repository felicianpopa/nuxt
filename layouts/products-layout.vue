<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <slot />
    <h2>Products page layout</h2>
</template>

<script>

</script>

<style>
.router-link-exact-active {
    color: #006687;
}
</style>