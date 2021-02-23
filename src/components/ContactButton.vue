<template>
    <button @click="$router.push('kontakt')"><span>Få et pristilbud</span></button>
</template>

<style scoped>
#contact-me {
	height: 50px;
	width: 150px;
	background-color: #243F50;
	color: #C2BBB0;
	border: none;
	font-size: 1.125em;
	cursor: pointer;
  	outline: none;
	padding: 0;
}
#contact-me span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
#contact-me span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}
#contact-me:hover span {
    padding-right: 15px;
}

#contact-me:hover span:after {
	opacity: 1;
	right: 0;
}
#contact-me:active {
	transform: translateY(1px) translateX(1px);
}
</style>