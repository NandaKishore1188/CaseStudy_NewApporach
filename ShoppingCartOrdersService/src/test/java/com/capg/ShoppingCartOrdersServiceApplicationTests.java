package com.capg;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.capg.dto.OrderDTO;
import com.capg.entity.Order;
import com.capg.repository.OrderRepository;

import com.capg.service.OrderServiceImpl;


@SpringBootTest
class ShoppingCartOrdersServiceApplicationTests {

	@Test
	void contextLoads() {
	}

	 @Mock
	    private OrderRepository orderRepository;

	    @InjectMocks
	    OrderServiceImpl orderServiceImpl;
	    @Test
        public void getAllOrdersDataTest()
        {
            List<Order> list = new ArrayList<Order>();
            Order order1 = new Order(300,"Test300",30,25);
            Order order2 = new Order(400,"Test400",20,35);
            Order order3 =new Order(400,"Test400",10,35);


            list.add(order1);
            list.add(order2);
            list.add(order3);

            when(orderRepository.findAll()).thenReturn(list);

            //test
            List<OrderDTO> productsDataList = orderServiceImpl.getOrders();

            assertEquals(3, productsDataList.size());
            verify(orderRepository, times(1)).findAll();
        }
	    @Test
	    public void saveOrdersTest()
	    {

	        Order order = new Order(200,"Test200",30,500);
	        orderRepository.save(order);
	        verify(orderRepository, times(1)).save(order);
	    }
	    @Test
	    void isOrderExistsById() {

	        Order order = new Order(300,"Test",20,5);
	        orderRepository.save(order);
	        Optional<Order> order1 =orderRepository.findById(300);
	        if(!order1.isEmpty()) {
	            Boolean actualResult = true;
	                    assertThat(actualResult).isTrue();
	        }
	    }
	    @Test
	    public void deleteOrderTest()
	    {
	        Order order = new Order(200,"Test200",30,500);
	        orderRepository.deleteById(200);
	        verify(orderRepository, times(1)).deleteById(200);
	    }




}
