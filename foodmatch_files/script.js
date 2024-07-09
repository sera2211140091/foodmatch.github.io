// �摜���I�����ꂽ�Ƃ��������V�s����������
function previewImage() {
    var fileInput = document.getElementById('input_image');
    var previewImg = document.getElementById('preview');
    var uploadButton = document.getElementById('upload-button');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
            uploadButton.disabled = false;
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
        uploadButton.disabled = true;
    }
}

// result.html�Ńy�[�W�؂�ւ��̏���������
var recipes = document.getElementsByClassName("recipe");
if (recipes.length > 0) {
    var recipeIndex = 0;

    function showRecipe() {
        for (var i = 0; i < recipes.length; i++) {
            recipes[i].style.display = "none";
        }
        recipes[recipeIndex].style.display = "block";
    }

    function prevRecipe() {
        if (recipeIndex > 0) {
            recipeIndex--;
        } else {
            recipeIndex = recipes.length - 1;
        }
        showRecipe();
    }

    function nextRecipe() {
        if (recipeIndex < recipes.length - 1) {
            recipeIndex++;
        } else {
            recipeIndex = 0;
        }
        showRecipe();
    }

    showRecipe();
}

// ���V�s�����{�^���̃C�x���g���X�i�[��ǉ�
document.getElementById('upload-button').addEventListener('click', function () {
    // �����L�[���[�h���擾
    const keyword = document.getElementById('input_image').value.split('\\').pop(); // �摜�t�@�C�������擾

    // �N�b�N�p�b�h�̌���URL�𐶐�
    const searchUrl = `https://cookpad.com/uk${"keyword"}`;

    // �V�����^�u�Ō���URL���J��
    window.open(searchUrl, '_blank');
});
