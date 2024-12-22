<script>
  const gridItems = document.querySelectorAll('.grid-item');
  const gridContainer = document.querySelector('.grid-container');

  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gridItems.forEach(gridItem => {
        if (gridItem === item) {
          gridItem.style.transform = 'scale(1.1)';
          gridItem.style.zIndex = 10; // Bring the hovered item to the front
        } else {
          gridItem.style.transform = 'scale(0.9)';
          gridItem.style.opacity = 0.8;
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      gridItems.forEach(gridItem => {
        gridItem.style.transform = 'scale(1)';
        gridItem.style.opacity = 1;
        gridItem.style.zIndex = 1;
      });
    });
  });
</script>
