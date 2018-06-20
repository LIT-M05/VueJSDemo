new Vue({
    el: '#app',
    mounted: function() {
        this.loadPeople();
    },
    data: {
        people: [],
        modalPerson: {
            FirstName: '',
            LastName: '',
            Age: ''
        },
        isEditMode: false,
        isLoading: false,
        isAscending: 1
    },
    methods: {
        loadPeople: function (fn) {
            this.isLoading = true;
            $.get('/home/getall', people => {
                this.people = people;
                this.isLoading = false;
                if (fn) {
                    fn();
                }
            });
        },

        newPerson: function () {
            $(".modal").modal();
            this.isEditMode = false;
        },

        addPerson: function () {
            $.post('/home/addperson', this.modalPerson, () => {
                this.loadPeople(() => {
                    $(".modal").modal('hide');
                    this.modalPerson = {
                        FirstName: '',
                        LastName: '',
                        Age: ''
                    }
                });
            });

        },

        editClick: function (person) {
            this.isEditMode = true;
            this.modalPerson = Object.assign({}, person);
            $(".modal").modal();
        },

        updatePerson: function() {
            $.post('/home/update',
                this.modalPerson, () => {
                    this.loadPeople(() => {
                        $(".modal").modal('hide');
                        this.modalPerson = {
                            FirstName: '',
                            LastName: '',
                            Age: ''
                        }
                        console.log('Boruch is happy!!');
                    });
                });
        },

        deleteClick: function(id) {
            $.post('/home/delete', {id}, () => {
                this.loadPeople();
            });
        },

        sortClick: function() {
            this.people.sort((a, b) => (a.Age - b.Age) * this.isAscending);
            this.isAscending *= -1;
        }
    }
})