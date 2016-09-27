var gulp = require('gulp'),

/*gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});*/
 sass = require('gulp-sass'); //Подключаем Sass пакет
 //sass = require('gulp-scss'); //Подключаем Sass пакет

 gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});

 /*gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/bootstrap-grid.css') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});
gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/variables.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});*/