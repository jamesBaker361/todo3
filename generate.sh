echo 🐣
echo $1
string=$1
first=`echo $string|cut -c1|tr [a-z] [A-Z]`
second=`echo $string|cut -c2-`
name=`echo $first$second`
echo $name
mkdir public/angular/$1
touch public/angular/$1/$1.module.js 
#subl public/angular/$1/$1.module.js 
echo "angular.module('$1', []).directive('jam $name',function(){ 
	return{
		templateUrl: 'angular/$1/$1.template.html',
		controller: $name Controller
	}
})" > public/angular/$1/$1.module.js
touch public/angular/$1/$1.controller.js
echo "function $first $name Controller(\$scope){}" > public/angular/$1/$1.controller.js

touch public/angular/$1/$1.template.html



echo "<script type=\"text/javascript\" src=\"angular/$1/$1.controller.js\"></script>
        <script type=\"text/javascript\" src=\"angular/$1/$1.module.js\"></script>"