$(document).ready(function() {
  $('#HAYOM, #teclado, #mouse, #mousepad, #fone, #Headset, #Multilaser, #gamer, #Office, #C3tech, #Trust, #Havit, #Maxprint, #Fortrek, #Vinik, #Warrior, #Knup, #JBL, #ND, #APPTECH, #RDG, #Microfone ').on('click', function() {
    const filters = [];
    if ($('#HAYOM').is(':checked')) {
      filters.push('HAYOM');
    }
    if ($('#Multilaser').is(':checked')) {
      filters.push('Multilaser');
    }
    if ($('#teclado').is(':checked')) {
      filters.push('teclado');
    }
    if ($('#mouse').is(':checked')) {
      filters.push('mouse');
    }
    if ($('#mousepad').is(':checked')) {
      filters.push('mousepad');
    }
    if ($('#fone').is(':checked')) {
      filters.push('fone');
    }
    if ($('#fone').is(':checked')) {
      filters.push('fone');
    }
    if ($('#gamer').is(':checked')) {
      filters.push('gamer');
    }
    if ($('#Office').is(':checked')) {
      filters.push('office');
    }
    if ($('#C3tech').is(':checked')) {
      filters.push('C3tech');
    }
    if ($('#Trust').is(':checked')) {
      filters.push('Trust');
    }
    if ($('#Havit').is(':checked')) {
      filters.push('Havit');
    }
    if ($('#Maxprint').is(':checked')) {
      filters.push('Maxprint');
    }
    if ($('#Fortrek').is(':checked')) {
      filters.push('Fortrek');
    }
    if ($('#Vinik').is(':checked')) {
      filters.push('Vinik');
    }
    if ($('#Warrior').is(':checked')) {
      filters.push('Warrior');
    }
    if ($('#Knup').is(':checked')) {
      filters.push('Knup');
    }
    if ($('#JBL').is(':checked')) {
      filters.push('JBL');
    }
    if ($('#ND').is(':checked')) {
      filters.push('ND');
    }
    if ($('#APPTECH').is(':checked')) {
      filters.push('APPTECH');
    }

    if ($('#RDG').is(':checked')) {
      filters.push('RDG');
    }
    if ($('#Headset').is(':checked')) {
      filters.push('Headset');
    }
    if ($('#ND').is(':checked')) {
      filters.push('ND');
    }
    if ($('#Microfone').is(':checked')) {
      filters.push('Microfone');
    }
    
    if (filters.length > 0) {
      $('.card').hide().filter(function() {
        const filterValues = $(this).data('filter')?.split(' ') || [];
        return filters.some((filter) => filterValues.includes(filter));
      }).show();
    } else {
      $('.card').show();
    }
  });
});