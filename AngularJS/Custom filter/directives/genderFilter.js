//Created Custome filter and registered it


app.filter('genderFilter', function genderFilter() {
    return function (genderFilter) {
        switch (genderFilter) {
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "Not Interested"
        }
    }
});
