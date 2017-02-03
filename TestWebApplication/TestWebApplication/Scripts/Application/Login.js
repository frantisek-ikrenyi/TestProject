var Login = {
    BindUIwithViewModel: function (viewModel) {
        ko.applyBindings(viewModel);
    },

    RegisterUIEventHandlers: function () {

        $('#LoginSubmit').click(function (e) {

            // Check whether the form is valid. Note: Remove this check, if you are not using HTML5
            if (document.forms[0].checkValidity()) {

                e.preventDefault();

                $.ajax({
                    type: "POST",
                    url: Login.SaveUrl,
                    data: ko.toJSON(Login.ViewModel),
                    contentType: 'application/json',
                    async: false,
                    beforeSend: function () {
                        // Display loading image
                    },
                    success: function (result) {
                        // Handle the response here.
                    },
                    complete: function () {
                        // Hide loading image.
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // Handle error.
                    }
                });
            }
        });
    },
};

$(document).ready(function () {
    Login.BindUIwithViewModel(Login.ViewModel);
    Login.RegisterUIEventHandlers();
});
