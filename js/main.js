/**
 * Created by Aero on 15/02/2017.
 */






function visStart(e) {

    loadData(function() {

        vis3DFlowMap();
    });


    $('input[name="municipality"]').change(function(e) {

        //cancelAnimationFrame(this.id);

        document.getElementById("map").removeChild(VIS.cssRenderer.domElement);
        document.getElementById("map").removeChild(VIS.glRenderer.domElement);

        if ($('input[name="municipality"]:checked').val() == "Utrecht") {
            citySelectedCurr = "Utrecht";
        }
        if ($('input[name="municipality"]:checked').val() == "Friesland") {

            citySelectedCurr = "Leeuwarden";
        }
        if ($('input[name="municipality"]:checked').val() == "Groningen") {

            citySelectedCurr = "Groningen";
        }


        loadData(function() {
            vis3DFlowMap();
        });


    });
}
