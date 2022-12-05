export const program = `
use.std::sys 
proc.number_add.4
    dup.0 pop.local.0 push.0 eq
if.true
    dup.0 push.128 lt
    if.true
      dup.0
    else
      push.0
    end
else
    push.1.1 pop.local.1
    while.true
        push.local.1 dup.0
        add.1 pop.local.1 sub.1 dup.0 push.0 gt
        if.true
            push.1
            while.true
                push.256 swap sub.1 dup.0 push.0 gt
            end
            drop
        else
            drop
        end
        push.local.1 dup.0 pop.local.1 sub.1 dup.0 pop.local.2 push.1 gt
        while.true
            mul push.local.2 sub.1 dup.0 pop.local.2 push.1 gt
        end
        push.local.3 add pop.local.3
        push.local.1 dup.0 pop.local.1
        push.local.0 dup.0 pop.local.0 lte
    end
    push.local.3
end
swap drop
end

proc.read_and_copy.60
push.mem.99 dup.0 pop.mem.99 dup.0 push.0 eq
if.true
    drop drop dup.0 push.adv.7
else
    swap dup.1 sub pop.local.0 push.adv.1 swap dup.0 sub.1 push.0 gt
    while.true
        push.adv.1 swap sub.1 dup.0 push.1 gt
    end
    drop push.mem.99 dup.0 pop.mem.99 add.1
    dup.0 u32checked_mod.4 pop.local.1 u32checked_div.4 add.50
    pop.local.2 popw.mem.50 push.51 push.local.2 dup.0 pop.local.2 push.50 gt
    while.true
        dup.0 movdn.5 popw.mem dup.0 add.1
        swap push.local.2 dup.0 pop.local.2 lt
    end
    drop push.local.2 dup.0 pop.local.2 pushw.mem
    push.4 push.local.1 dup.0 pop.local.1 sub dup.0 push.4 eq
    if.true
        drop
    else
        dup.0 pop.local.3 push.1
        while.true
            movup.4 swap sub.1 dup.0 push.0 gt
        end
        drop push.local.3 dup.0 push.0 gt
        while.true
            swap drop sub.1 dup.0 push.0 gt
        end
        drop
    end
    push.local.2 dup.0 pop.local.2 sub.1 dup.0 sub.49 push.1 gte
    while.true
        dup.0 pushw.mem movup.4 sub.1 dup.0 sub.49 push.1 gte
    end
    drop push.local.2 dup.0 pop.local.2 pushw.mem
    push.4 push.local.1 dup.0 pop.local.1 sub dup.0 push.4 eq
    if.true
        drop
    else
        dup.0 pop.local.3 push.1
        while.true
            movup.4 swap sub.1 dup.0 push.0 gt
        end
        drop push.local.3 dup.0 push.0 gt
        while.true
            swap drop sub.1 dup.0 push.0 gt
        end
        drop
    end
    push.local.2 dup.0 pop.local.2 sub.1 dup.0 sub.49 push.1 gte
    while.true
        dup.0 pushw.mem movup.4 sub.1 dup.0 sub.49 push.1 gte
    end
    drop push.local.0 dup.0 push.0 eq
    if.true
        drop
    else
        push.adv.1 swap dup.0 sub.1 push.0 gt
        while.true
            push.adv.1 swap sub.1 dup.0 push.1 gt
        end
        drop
    end
end
end
proc.read_new_leaf
push.adv.1 dup.0 dup.0 push.0 gt swap push.129 lt and
if.true
    push.7 push.0 pop.mem.99  push.1 pop.mem.200
else
    dup.0 push.128 gt push.1
    assert_eq dup.0 sub.128 dup.0 dup.0
    pop.mem.99 push.8 lt
    if.true
        drop push.7
        push.1 pop.mem.200
    else
        u32checked_div.4 dup.0 pop.mem.200 u32checked_mul.4 u32checked_add.3
    end
end
end

proc.multi_rphash
push.mem.200 dup.0 push.1 eq
if.true
    drop rphash
else
    push.1
    while.true
        sub.1
        movdn.8 rphash
        movup.4 dup.0 push.1 gte
    end
drop
end
end


begin
push.1 pop.mem.101 push.adv.4 popw.mem.100
exec.read_new_leaf exec.read_and_copy exec.multi_rphash dupw popw.mem.40 push.adv.4 rphash
push.adv.4 swapw rphash
pushw.mem.100 dupw popw.mem.100 movup.4 eq swap movup.4 eq movup.2 movup.4
eq movup.3 movup.4 eq and and and not
if.true
    padw popw.mem.100
end
pushw.mem.40
   
push.12039647118452995642 push.16650728778266705604 push.17754152925651475975 push.16499855515469136577 eqw movdn.8 dropw  push.11369580540590559562 push.4096674315433798547 push.3530479093993771341 push.10498472907360964007 eqw movdn.8 dropw  push.4320584524085631004 push.12073393141506605059 push.16441760605999779979 push.6273182873382636051 eqw movdn.8 dropw  push.17386619271467122756 push.8682788138934719190 push.3635907292391153320 push.4366082523215625480 eqw movdn.8 dropw  dropw or or or pop.mem.101


pushw.mem.100 push.mem.101
    
exec.sys::finalize_stack
end
`