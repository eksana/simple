var gulp = require('gulp'),
    //concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    //uglify      = require('gulp-uglifyjs'),// Подключаем gulp-uglifyjs (для сжатия JS)
    //cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
   // rename      = require('gulp-rename'), // Подключаем библиотеку для переименования
    //imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    //pngquant    = require('imagemin-pngquant'),
   // cache       = require('gulp-cache'), // Подключаем библиотеку кеширова
   autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автомат
   fileinclude = require('gulp-file-include'),

/*gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});*/
 sass = require('gulp-sass'); //Подключаем Sass пакет
 //sass = require('gulp-scss'); //Подключаем Sass пакет

 gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});

 gulp.task('fileinclude', function() {
  gulp.src(['src/Beauty.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    //.pipe(gulp.dest('simple/'));
    //.pipe(gulp.dest('src/'));
    .pipe(gulp.dest('src/'));
});//выгружается в отдельный файл src, т.е. тудаже в источник



//sussy
/*gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});*/
 

/*gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'src/libs/jquery/jquery-2.1.3.min.js', // Берем jQuery
        'src/js/common.js' // Берем common.js
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js')); // Выгружаем в папку app/js
});



gulp.task('css-libs', ['sass'], function() {
    return gulp.src(['src/css/bootstrap-grid.css',
                      'src/css/main.css',
                      'src/css/variables.css'
        ]) */

     //.pipe(concat('libs.css')) // Собираем их в кучу в новом файле libs.min.css 
        /*.pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('build/css')); // Выгружаем в папку app/css
});*/

/*gulp.task('img', function() {
    return gulp.src('src/img/**///*') // Берем все изображения из app
       //.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
           /* interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('build/img')); // Выгружаем на продакшен
});*/
