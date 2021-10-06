const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const canvas = document.getElementById('canvas')
let clicked = false;

const resetStars = () => {
    first.classList.remove('bi-star-fill');
    second.classList.remove('bi-star-fill');
    third.classList.remove('bi-star-fill');
    fourth.classList.remove('bi-star-fill');
    fifth.classList.remove('bi-star-fill');
}

const firstStar = () => {


    first.addEventListener('mouseover', function (event) {
        if (clicked === false) {
            first.classList.remove('bi-star');
            first.classList.add('bi-star-fill')
        }


    });
    first.addEventListener('mouseout', function (event) {

        if (clicked === false) {
            first.classList.remove('bi-star-fill');
            first.classList.add('bi-star')
        }



    });

    first.addEventListener('click', function (event) {
        event.stopPropagation();
        resetStars();

        first.classList.add('bi-star-fill');
        second.classList.add('bi-star');
        third.classList.add('bi-star');
        fourth.classList.add('bi-star');
        fifth.classList.add('bi-star');
        clicked = true;

    });

}

const secondStar = () => {


    second.addEventListener('mouseover', function (event) {
        if (clicked === false) {
            first.classList.remove('bi-star');
            second.classList.remove('bi-star');
            first.classList.add('bi-star-fill')
            second.classList.add('bi-star-fill')
        }



    });
    second.addEventListener('mouseout', function (event) {

        if (clicked === false) {
            first.classList.remove('bi-star-fill');
            second.classList.remove('bi-star-fill');
            first.classList.add('bi-star')
            second.classList.add('bi-star')

        }



    });

    second.addEventListener('click', function (event) {
        event.stopPropagation();
        resetStars();

        first.classList.add('bi-star-fill');
        second.classList.add('bi-star-fill');
        third.classList.add('bi-star');
        fourth.classList.add('bi-star');
        fifth.classList.add('bi-star');
        clicked = true;

    });

}

const thirdStar = () => {


    third.addEventListener('mouseover', function (event) {
        if (clicked === false) {
            first.classList.remove('bi-star');
            second.classList.remove('bi-star');
            third.classList.remove('bi-star');
            first.classList.add('bi-star-fill')
            second.classList.add('bi-star-fill')
            third.classList.add('bi-star-fill')
        }


    });
    third.addEventListener('mouseout', function (event) {

        if (clicked === false) {
            first.classList.remove('bi-star-fill');
            second.classList.remove('bi-star-fill');
            third.classList.remove('bi-star-fill');
            first.classList.add('bi-star')
            second.classList.add('bi-star')
            third.classList.add('bi-star')

        }

    });

    third.addEventListener('click', function (event) {
        event.stopPropagation();
        resetStars();

        first.classList.add('bi-star-fill');
        second.classList.add('bi-star-fill');
        third.classList.add('bi-star-fill');
        fourth.classList.add('bi-star');
        fifth.classList.add('bi-star');
        clicked = true;

    });

}

const fourthStar = () => {


    fourth.addEventListener('mouseover', function (event) {
        if (clicked === false) {
            first.classList.remove('bi-star');
            second.classList.remove('bi-star');
            third.classList.remove('bi-star');
            fourth.classList.remove('bi-star');
            first.classList.add('bi-star-fill')
            second.classList.add('bi-star-fill')
            third.classList.add('bi-star-fill')
            fourth.classList.add('bi-star-fill')
        }


    });
    fourth.addEventListener('mouseout', function (event) {

        if (clicked === false) {
            first.classList.remove('bi-star-fill');
            second.classList.remove('bi-star-fill');
            third.classList.remove('bi-star-fill');
            fourth.classList.remove('bi-star-fill');
            first.classList.add('bi-star')
            second.classList.add('bi-star')
            third.classList.add('bi-star')
            fourth.classList.add('bi-star')

        }

    });

    fourth.addEventListener('click', function (event) {
        event.stopPropagation();
        resetStars();

        first.classList.add('bi-star-fill');
        second.classList.add('bi-star-fill');
        third.classList.add('bi-star-fill');
        fourth.classList.add('bi-star-fill');
        fifth.classList.add('bi-star')
        clicked = true;

    });

}
const fifthStar = () => {


    fifth.addEventListener('mouseover', function (event) {
        if (clicked === false) {
            first.classList.remove('bi-star');
            second.classList.remove('bi-star');
            third.classList.remove('bi-star');
            fourth.classList.remove('bi-star');
            fifth.classList.remove('bi-star');
            first.classList.add('bi-star-fill')
            second.classList.add('bi-star-fill')
            third.classList.add('bi-star-fill')
            fourth.classList.add('bi-star-fill')
            fifth.classList.add('bi-star-fill')
        }


    });
    fifth.addEventListener('mouseout', function (event) {

        if (clicked === false) {
            resetStars();
            first.classList.add('bi-star')
            second.classList.add('bi-star')
            third.classList.add('bi-star')
            fourth.classList.add('bi-star')
            fifth.classList.add('bi-star')

        }

    });

    fifth.addEventListener('click', function (event) {
        event.stopPropagation();
        resetStars();

        first.classList.add('bi-star-fill');
        second.classList.add('bi-star-fill');
        third.classList.add('bi-star-fill');
        fourth.classList.add('bi-star-fill');
        fifth.classList.add('bi-star-fill');
        clicked = true;

    });

}

canvas.addEventListener('click', function (event) {

    event.stopPropagation();
    event.stopImmediatePropagation();
    resetStars();

    first.classList.add('bi-star');
    second.classList.add('bi-star');
    third.classList.add('bi-star');
    fourth.classList.add('bi-star');
    fifth.classList.add('bi-star');

    clicked = false;


});

firstStar();
secondStar();
thirdStar();
fourthStar();
fifthStar();

