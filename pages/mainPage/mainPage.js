import React from 'react';

const mainPage = () => {
    return <div>
<body>
<header>
<div classname="nav" id="nav">

	<div classname="menu">
	<ul>
		<li><a href="#possib">ВОЗМОЖНОСТИ</a></li>
		<li><a id="first"><b>T&T</b></a></li>
		<li><a href="#info">ПОПУЛЯРНОЕ</a></li>
	</ul>
	</div>

	<div classname="nextmenu">
	<b>
		<a id="t1">ПЛАНИРУЙ</a><br>
		<a id="t2">СОЗДАВАЙ</a><br>
		<a id="t3">ПУТЕШЕСТВУЙ</a>
	</b>
	</div>

	<div classname="buttons">
	<center>
		<button id="signupButton">
		<a>РЕГИСТРАЦИЯ</a>
		</button>
		<br>
		<button id="signinButton">
		<a>ВХОД В АККАУНТ</a>
		</button>
	</center>
	</div>
</div>
</header>

<div classname="possib" id="possib">
	<div classname="text">
		<a id="t4"><b>ВОЗМОЖНОСТИ</b></a>
		<a>Мы предлагаем большой спектр</a>
		<a>функций, которые вам доступны, а</a>
		<a>именно</a>
	</div>
	<div classname="blocks">
		<div classname="poss1">
		<center>
			<img src="{% static 'img/dom.png' %}" width="30%">
			<a id="t5"><b>Просмотр</b></a>
			<a id="t6"><b>достопримечательностей</b></a>
			<a>Вы можете выбрать любую</a>
			<a>страну или город на свой вкус,</a>
			<a>просмотреть ее знаменитые</a>
			<a>памятники архитектуры, музеи и</a>
			<a id="t7">так далее</a>
		</center>
		</div>

		<div classname="poss2">
		<center>
			<img src="{% static 'img/row.png' %}" width="30%">
			<a id="t5"><b>Составление</b></a>
			<a id="t5"><b>туристических</b></a>
			<a id="t6"><b>маршрутов</b></a>
			<a>Вы можете выбрать любые</a>
			<a>достопримечательности из списка и</a>
			<a>составить из низ свой маршрут</a>
			<a>памятники архитектуры, музеи и</a>
			<a id="t7">самостоятельно</a>
		</center>
		</div>

		<div classname="poss3">
		<center>
			<img src="{% static 'img/map.png' %}" width="30%">
			<a id="t5"><b>Визуализация</b></a>
			<a id="t6"><b>маршрутов на карте</b></a>
			<a>Вы можете пользоваться</a>
			<a>Яндекс. Картами для того, чтобы</a>
			<a>визуализировать свой маршрут и</a>
			<a id="t7">ставить на нем метки</a>
		</center>
		</div>
	</div>
</div>

<div classname="info" id="info">
	<div classname="text1">
		<a id="t4"><b>ПОПУЛЯРНЫЕ<br>ГОРОДА</b></a>
		<a>Мы собрали список самых популярных<br>
		городов и достопримечательностей<br>
		Беларуси для выших незабываемых<br>
		путешествий</a>

		<div classname="blocks1">
			<div classname="city1">
				<img src="{% static 'img/minsk.png' %}" width="100%">
				<a>Минск</a>
			</div>

			<div classname="city2">
				<img src="{% static 'img/brest.png' %}" width="100%">
				<a>Брест</a>
			</div>

			<div classname="city3">
				<img src="{% static 'img/mogilev.png' %}" width="100%">
				<a>Могилев</a>
			</div>
		</div>

		<div classname="blocks2">
			<div classname="city4">
				<img src="{% static 'img/Gomel.png' %}" width="100%">
				<a>Гомель</a>
			</div>

			<div classname="city5">
				<img src="{% static 'img/grodno.png' %}" width="100%">
				<a>Гродно</a>
			</div>

			<div classname="city6">
				<img src="{% static 'img/pinsk.png' %}" width="100%">
				<a>Пинск</a>
			</div>
		</div>
	</div>
</div>
<hr>
<footer>
	<div classname="logo">
		<a href="#nav">T&T</a>
	</div>

	<div classname="links">
		<img src="{% static 'img/inst.png' %}" width="3%">
		<img src="{% static 'img/tg.png' %}" id="tg" width="3%">
	</div>
</footer>

</body>
 </div>;
};

export default mainPage;