/*
module.exports = function(grunt){

    //step 1:
    //configuration

      grunt.initConfig({
 //      //pass in options to plugin, reference file etc
 //      
 //      concat: {
 //          js: {
 //              src: ['js/*js'],
 //              dest: 'build/scripts.js'
 //          },
 //          js: {
 //              src: ['css/*css'],
 //              dest: 'build/styles.css'
 //          
 //      }
 //      }
 //      
      sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/scss_to_css.css' : 'css/scss/style1.scss'
        }
      }
    }
   });

    //step 2:
    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');


    //step 3:
    //register task

   // grunt.registerTask('run' , function() {
   //     console.log('running');
   // })
//
   // grunt.registerTask('sleep' , function(){
   //     console.log('sleeping');
   // })
//
   // grunt.registerTask('all' , ['sleep', 'run']);


   // to do singal task
   //grunt.registerTask('concat-js', '[concat:js]');
//};

*/
module.exports = function(grunt) {

    grunt.initConfig({
      concat: {
        js: {
          src: ['js/*.js'],
          dest: 'build/scripts.js'
        },
        css: {
          src: ['css/*.css'],
          dest: 'build/styles.css'
        }
      },
      sass: {
        dist: {
          files: {
            'src/scss_to_css.css': 'css/sass/style1.scss'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    grunt.registerTask('default', ['concat', 'sass']);
  
  };
  