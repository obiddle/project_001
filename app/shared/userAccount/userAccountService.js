


simplySocialApp.factory('userAccountService', [ function () {
	var factory = {}

    factory.getUserData = function(){
		var data = {}
		data.id = 100;
		data.name = "Owen Biddle";
		data.avatar_image = "assets/images/post/dataBlobImages/avatar_image.jpg";
		data.description = "Front-end & mobile Engineer Living in San Diego, CA";
		data.website = "https://www.linkedin.com/in/owenbiddle";
		data.website_name = "linkedin.com/in/owenbiddle"
		data.email = "obiddle@gmail.com";
		data.password = "mypassword";
		data.preferences = [];
		data.preferences[0] = 1;
		data.preferences[1] = 1;
		data.preferences[2] = 1;
		data.preferences[3] = 0;
		data.preferences[5] = 1;
		data.preferences[6] = 0;
		data.preferences[7] = 1;
		data.preferences[8] = 1;
		data.preferences[9] = 0;
		data.preferences[10] = 0;

        return data;
    }

	return factory;
}])



